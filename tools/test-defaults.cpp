#include <cassert>
#include <cstdio>
#include <string>
#include <vector>
#include "MeshcoreUaDefaults.h"
#include "UaBootstrap.h"

struct FakeMesh {
  std::vector<std::string> names = { "Public" };
  std::vector<std::string> keys;
  bool reject = false;
  bool addChannel(const char* name, const char* key) {
    if (reject) return false;
    names.emplace_back(name);
    keys.emplace_back(key);
    return true;
  }
};

struct FakeStore {
  bool prefs = false, legacy = false, channels = false;
  int writes = 0;
  bool hasSavedConfiguration() const {
    return !meshcore_ua::isUnconfigured(prefs, legacy, channels);
  }
  void saveChannels(FakeMesh*) { ++writes; channels = true; }
};

int main() {
  for (unsigned flags = 0; flags < 8; ++flags) {
    FakeStore store;
    store.prefs = (flags & 1) != 0;
    store.legacy = (flags & 2) != 0;
    store.channels = (flags & 4) != 0;
    FakeMesh mesh;
    if (flags) mesh.names.push_back("My private channel");
    const auto before = mesh.names;
    const bool seeded = meshcore_ua::seedChannelsIfUnconfigured(store, mesh);
    assert(seeded == (flags == 0));
    if (flags) {
      assert(mesh.names == before);
      assert(store.writes == 0);
    } else {
      assert(mesh.names.size() == 1 + meshcore_ua::kChannelCount);
      assert(mesh.names[0] == "Public");
      for (unsigned i = 0; i < meshcore_ua::kChannelCount; ++i) {
        assert(mesh.names[i + 1] == meshcore_ua::kChannels[i].name);
        assert(mesh.keys[i] == meshcore_ua::kChannels[i].keyBase64);
      }
      assert(store.writes == 1);
      const auto configured = mesh.names;
      assert(!meshcore_ua::seedChannelsIfUnconfigured(store, mesh));
      assert(mesh.names == configured);
      assert(store.writes == 1);
    }
  }
  FakeStore failingStore;
  FakeMesh failingMesh;
  failingMesh.reject = true;
  assert(!meshcore_ua::seedChannelsIfUnconfigured(failingStore, failingMesh));
  assert(failingStore.writes == 0);
  std::puts("PASS: clean bootstrap, Public preserved, all saved-config combinations, restart idempotence, failed seed not persisted.");
}
