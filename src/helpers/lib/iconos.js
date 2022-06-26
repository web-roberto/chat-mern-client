import IconSelect from './control/iconselect';
var iconSelect;

window.onload = function () {
  iconSelect = new IconSelect('my-icon-select', {
    selectedIconWidth: 48,
    selectedIconHeight: 48,
    selectedBoxPadding: 1,
    iconsWidth: 23,
    iconsHeight: 23,
    boxIconSpace: 1,
    vectoralIconNumber: 4,
    horizontalIconNumber: 4,
  });
  console.log('IconoSelecionado', iconSelect);

  var icons = [];
  icons.push({
    iconFilePath: '../images/icons/1.png',
    iconValue: '1',
  });
  icons.push({
    iconFilePath: '../images/icons/2.png',
    iconValue: '2',
  });

  iconSelect.refresh(icons);
};
