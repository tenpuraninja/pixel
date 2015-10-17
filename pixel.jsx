 layObj= app.project.activeItem.selectedLayers;

for (i=0; i<layObj.length; i++){
    pixel= layObj[i];
    pixel("Effects").addProperty("モザイク");
    pixel("Effects")("モザイク")["水平ブロック"].setValue(64);
    pixel("Effects")("モザイク")["垂直ブロック"].setValue(36);

    pixel("Effects").addProperty("グリッド");
    pixel("Effects")("グリッド")["アンカー"].setValue([0,0]);
    pixel("Effects")("グリッド")["グリッドサイズ"].setValue(2);
    pixel("Effects")("グリッド")["幅"].setValue([30.0]);
    pixel("Effects")("グリッド")["ボーダー"].setValue([1.0]);
    pixel("Effects")("グリッド")["描画モード"].setValue(23);
}