'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListContainer = require('./ListContainer');

var _ListContainer2 = _interopRequireDefault(_ListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSelectorView = function ListSelectorView(_ref) {
  var unSelectedList = _ref.unSelectedList,
      selectedList = _ref.selectedList,
      style = _ref.style,
      disableHoverColor = _ref.disableHoverColor,
      _ref$unSelectedItemHo = _ref.unSelectedItemHoverColor,
      unSelectedItemHoverColor = _ref$unSelectedItemHo === undefined ? 'red' : _ref$unSelectedItemHo,
      _ref$selectedItemHove = _ref.selectedItemHoverColor,
      selectedItemHoverColor = _ref$selectedItemHove === undefined ? 'green' : _ref$selectedItemHove,
      hideDivider = _ref.hideDivider,
      hideBulkUpdateButtons = _ref.hideBulkUpdateButtons,
      selectAllButton = _ref.selectAllButton,
      unSelectAllButton = _ref.unSelectAllButton;
  return _react2.default.createElement(
    'div',
    { style: { display: 'inline-flex' }, className: 'listSelector' },
    _react2.default.createElement(_ListContainer2.default, {
      key: 'unSelectedList',
      listItems: unSelectedList,
      listItemHoverColor: disableHoverColor ? '' : unSelectedItemHoverColor,
      style: style,
      hideDivider: hideDivider,
      bulkUpdateButton: selectAllButton,
      hideBulkUpdateButton: hideBulkUpdateButtons
    }),
    _react2.default.createElement(_ListContainer2.default, {
      key: 'selectedList',
      listItems: selectedList,
      listItemHoverColor: disableHoverColor ? '' : selectedItemHoverColor,
      style: style,
      hideDivider: hideDivider,
      bulkUpdateButton: unSelectAllButton,
      hideBulkUpdateButton: hideBulkUpdateButtons
    })
  );
};

exports.default = ListSelectorView;