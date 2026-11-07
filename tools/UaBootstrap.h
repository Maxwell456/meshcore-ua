#pragma once

// Shared by the firmware and the native regression test.
namespace meshcore_ua {
constexpr bool isUnconfigured(bool hasPrefs, bool hasLegacyPrefs, bool hasChannels) {
  return !hasPrefs && !hasLegacyPrefs && !hasChannels;
}

template <typename Store, typename Mesh>
bool seedChannelsIfUnconfigured(Store& store, Mesh& mesh) {
  if (store.hasSavedConfiguration()) return false;
  for (const auto& channel : kChannels) {
    if (!mesh.addChannel(channel.name, channel.keyBase64)) return false;
  }
  store.saveChannels(&mesh);
  return true;
}
} // namespace meshcore_ua
