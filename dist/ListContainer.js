'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List/List');

var _List2 = _interopRequireDefault(_List);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {};

var ListContainer = function ListContainer(_ref) {
  var listItems = _ref.listItems,
      listItemHoverColor = _ref.listItemHoverColor,
      containerStyle = _ref.style,
      hideDivider = _ref.hideDivider,
      bulkUpdateButton = _ref.bulkUpdateButton,
      hideBulkUpdateButton = _ref.hideBulkUpdateButton;
  return _react2.default.createElement(
    'div',
    { style: containerStyle || defaultStyle },
    !hideBulkUpdateButton && bulkUpdateButton,
    _react2.default.createElement(
      _List2.default,
      null,
      listItems.map(function (_ref2) {
        var id = _ref2.id,
            disabled = _ref2.disabled,
            primaryText = _ref2.primaryText,
            secondaryText = _ref2.secondaryText,
            listItemStyle = _ref2.style,
            onClick = _ref2.onClick;
        return _react2.default.createElement(
          'div',
          { key: id },
          _react2.default.createElement(_ListItem2.default, {
            id: id,
            disabled: disabled,
            primaryText: primaryText,
            secondaryText: secondaryText,
            secondaryTextLines: 1,
            onClick: onClick,
            style: listItemStyle,
            hoverColor: listItemHoverColor
          }),
          hideDivider && _react2.default.createElement(_Divider2.default, null)
        );
      })
    )
  );
};

exports.default = ListContainer;