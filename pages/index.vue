<template>
  <v-container>
    <vc-config-provider :cesium-path="vcConfig.cesiumPath">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-imagery-provider-arcgis> </vc-imagery-provider-arcgis>
        </vc-layer-imagery>

        <vc-entity
          :position="[139.762222, 35.713333]"
          description="The University of Tokyo"
        >
          <vc-graphics-point
            ref="point1"
            color="red"
            :pixel-size="8"
          ></vc-graphics-point>
        </vc-entity>
      </vc-viewer>
    </vc-config-provider>
  </v-container>
</template>
<script lang="ts" setup>
import {
  VcConfigProvider,
  VcViewer,
  VcEntity,
  VcGraphicsPoint,
  VcLayerImagery,
  VcImageryProviderArcgis,
} from "vue-cesium";

const vcConfig = reactive({
  cesiumPath: "https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js",
});
</script>
