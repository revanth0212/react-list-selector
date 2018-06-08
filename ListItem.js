'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {};

var ListItem = function ListItem(_ref) {
  var id = _ref.id,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText,
      style = _ref.style,
      _onClick = _ref.onClick,
      _ref$hoverColor = _ref.hoverColor,
      hoverColor = _ref$hoverColor === undefined ? '' : _ref$hoverColor;
  return _react2.default.createElement(_ListItem2.default, {
    key: id,
    disabled: disabled,
    primaryText: primaryText || '',
    secondaryText: secondaryText || '',
    secondaryTextLines: 1,
    onClick: function onClick() {
      return _onClick(id);
    },
    style: style || defaultStyle,
    hoverColor: hoverColor
  });
};

exports.default = ListItem;