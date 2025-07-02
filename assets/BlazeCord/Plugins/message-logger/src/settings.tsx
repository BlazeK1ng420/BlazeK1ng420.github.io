import { ReactNative } from "@relapse/metro/common";
import { Forms } from "@relapse/ui/components";
import { getAssetIDByName } from "@relapse/ui/assets";
import { storage } from "@relapse/plugin";
import { useProxy } from "@relapse/storage";

const { FormIcon, FormSwitchRow } = Forms;

storage.nopk ??= false;

export default () => {
  useProxy(storage);

  return (
    <ReactNative.ScrollView>
      <FormSwitchRow
        label="Ignore PluralKit"
        leading={<FormIcon source={getAssetIDByName("ic_block")} />}
        onValueChange={(v) => void (storage.nopk = v)}
        value={storage.nopk}
      />
    </ReactNative.ScrollView>
  );
};
