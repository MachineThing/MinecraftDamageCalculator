function calculate() {

}

function updateType(type) {
    var material_select = document.getElementById('weapon_material');
    if (type == 'fist' | type == 'bow' || type == 'crossbow') {
        material_select.disabled = true;
    } else {
        material_select.disabled = false;
    }
}
