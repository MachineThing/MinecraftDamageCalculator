function calculate() {
    var total_damage = document.getElementById('total_damage');
    var weapon_material = document.getElementById('weapon_material_select');
    var weapon_type = document.getElementById('weapon_type');
    var damage = 0;

    switch (weapon_type.value) {
        case 'fist':
            damage = 1;
            break;
        case 'trident':
            damage = 9;
            break;
        // Multi material
        case 'sword':
            damage = material_switch(weapon_material.value, 4, 5, 6, 7, 8);
            break;
        case 'axe':
            damage = material_switch(weapon_material.value, 7, 9, 9, 9, 10);
            break;
    }
    total_damage.innerHTML = "Damage: " + damage + " (" + damage/2 + " hearts)"
}

function material_switch(material, wood_gold, stone, iron, diamond, nether) {
    damage = 0
    switch (material) {
        default:
            damage = wood_gold;
            break;
        case 'stone':
            damage = stone;
            break;
        case 'iron':
            damage = iron;
            break;
        case 'diamond':
            damage = diamond;
            break;
        case 'nether':
            damage = nether;
            break;

    }
    return damage;
}

function updateType(type) {
    var weapon_material = document.getElementById('weapon_material');
    var weapon_type = document.getElementById('weapon_type')
    var weapon_name = document.getElementById('weapon_name');
    var material_name = weapon_type.options[weapon_type.selectedIndex].text;
    weapon_name.innerHTML = material_name + " properties";
    if (type == 'sword' | type == 'axe') {
        weapon_material.style.display = 'block';
    } else {
        weapon_material.style.display = 'none';
    }
}

function init() {
  var material_select = document.getElementById('weapon_material');
  var weapon_type = document.getElementById('weapon_type');
  material_select.value = 'wood';
  material_select.style.display = 'none';
  weapon_type.value = 'fist';
}
