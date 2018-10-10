'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _arrowForward = require('material-ui/svg-icons/navigation/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

var _arrowBack = require('material-ui/svg-icons/navigation/arrow-back');

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _ListSelector = require('./ListSelector.view');

var _ListSelector2 = _interopRequireDefault(_ListSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListSelector = function (_Component) {
  _inherits(ListSelector, _Component);

  function ListSelector(props) {
    _classCallCheck(this, ListSelector);

    var _this = _possibleConstructorReturn(this, (ListSelector.__proto__ || Object.getPrototypeOf(ListSelector)).call(this, props));

    _this.onUnselectedItemClick = function (id) {
      var _this$state = _this.state,
          unSelectedList = _this$state.unSelectedList,
          selectedList = _this$state.selectedList;

      var _this$moveItemFromLis = _this.moveItemFromList1To2(unSelectedList, selectedList, id),
          updatedUnSelectedList = _this$moveItemFromLis.list1,
          updatedSelectedList = _this$moveItemFromLis.list2,
          movedItem = _this$moveItemFromLis.movedItem;

      _this.setState({
        unSelectedList: updatedUnSelectedList,
        selectedList: updatedSelectedList
      }, function () {
        _this.props.onUnselectedItemClick(movedItem);
        _this.props.onClick(movedItem, true);
      });
    };

    _this.onSelectedItemClick = function (id) {
      var _this$state2 = _this.state,
          unSelectedList = _this$state2.unSelectedList,
          selectedList = _this$state2.selectedList;

      var _this$moveItemFromLis2 = _this.moveItemFromList1To2(selectedList, unSelectedList, id),
          updatedSelectedList = _this$moveItemFromLis2.list1,
          updatedUnSelectedList = _this$moveItemFromLis2.list2,
          movedItem = _this$moveItemFromLis2.movedItem;

      _this.setState({
        unSelectedList: updatedUnSelectedList,
        selectedList: updatedSelectedList
      }, function () {
        _this.props.onSelectedItemClick(movedItem);
        _this.props.onClick(movedItem, false);
      });
    };

    _this.getUnSelectedList = function () {
      return _this.state.unSelectedList;
    };

    _this.getSelectedList = function () {
      return _this.state.selectedList;
    };

    _this.selectAll = function () {
      var disabledItems = [];
      var enabledItems = [];
      _this.state.unSelectedList.forEach(function (unselectedItem) {
        if (unselectedItem.disabled) {
          disabledItems.push(unselectedItem);
        } else {
          enabledItems.push(unselectedItem);
        }
      });
      _this.setState({
        unSelectedList: disabledItems,
        selectedList: [].concat(_toConsumableArray(_this.state.selectedList), enabledItems)
      }, _this.props.onSelectAllClick);
    };

    _this.unSelectAll = function () {
      var disabledItems = [];
      var enabledItems = [];
      _this.state.selectedList.forEach(function (selectedItem) {
        if (selectedItem.disabled) {
          disabledItems.push(selectedItem);
        } else {
          enabledItems.push(selectedItem);
        }
      });
      _this.setState({
        selectedList: disabledItems,
        unSelectedList: [].concat(_toConsumableArray(_this.state.unSelectedList), enabledItems)
      }, _this.props.onUnSelectAllClick);
    };

    _this.SelectAllButton = _react2.default.createElement(
      'div',
      { onClick: _this.selectAll },
      _this.props.SelectAllButton ? _this.props.SelectAllButton : _react2.default.createElement(_FlatButton2.default, {
        backgroundColor: 'rgba(80, 57, 198, 1)',
        hoverColor: 'rgba(80, 57, 198, 0.9)',
        icon: _react2.default.createElement(_arrowForward2.default, { color: 'white' }),
        style: {
          marginTop: 12
        },
        fullWidth: true
      })
    );
    _this.UnSelectAllButton = _react2.default.createElement(
      'div',
      { onClick: _this.unSelectAll },
      _this.props.UnSelectAllButton ? _this.props.UnSelectAllButton : _react2.default.createElement(_FlatButton2.default, {
        backgroundColor: 'rgba(80, 57, 198, 1)',
        hoverColor: 'rgba(80, 57, 198, 0.9)',
        icon: _react2.default.createElement(_arrowBack2.default, { color: 'white' }),
        style: {
          marginTop: 12
        },
        fullWidth: true
      })
    );

    _this.moveItemFromList1To2 = function (list1, list2, id) {
      var _this$popIdFromList = _this.popIdFromList(list1, id),
          updatedList1 = _this$popIdFromList.updatedList,
          itemObject = _this$popIdFromList.itemObject;

      var updatedList2 = _this.pushItemIntoList(list2, itemObject);
      return {
        list1: updatedList1,
        list2: updatedList2,
        movedItem: itemObject
      };
    };

    _this.popIdFromList = function (itemsList, id) {
      var updatedList = [];
      var objectWithGivenId = {};
      itemsList.forEach(function (itemObject) {
        if (itemObject.id === id) {
          objectWithGivenId = itemObject;
        } else {
          updatedList.push(itemObject);
        }
      });
      return {
        updatedList: updatedList,
        itemObject: objectWithGivenId
      };
    };

    _this.pushItemIntoList = function (itemsList, itemObject) {
      itemsList.push(itemObject);
      return itemsList;
    };

    _this.injectOnClick = function (itemsList, onClick) {
      return itemsList.map(function (itemConfig) {
        return _extends({}, itemConfig, { onClick: onClick });
      });
    };

    _this.state = {
      unSelectedList: props.unSelectedList || [],
      selectedList: props.selectedList || []
    };
    return _this;
  }

  _createClass(ListSelector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var unSelectedList = _ref.unSelectedList,
          selectedList = _ref.selectedList;

      this.setState({
        unSelectedList: unSelectedList,
        selectedList: selectedList
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          unSelectedList = _state.unSelectedList,
          selectedList = _state.selectedList;
      var _props = this.props,
          style = _props.style,
          disableHoverColor = _props.disableHoverColor,
          unSelectedItemHoverColor = _props.unSelectedItemHoverColor,
          selectedItemHoverColor = _props.selectedItemHoverColor,
          hideDivider = _props.hideDivider,
          hideBulkUpdateButtons = _props.hideBulkUpdateButtons;

      return _react2.default.createElement(_ListSelector2.default, {
        unSelectedList: this.injectOnClick(unSelectedList, this.onUnselectedItemClick),
        selectedList: this.injectOnClick(selectedList, this.onSelectedItemClick),
        style: style,
        disableHoverColor: disableHoverColor,
        unSelectedItemHoverColor: unSelectedItemHoverColor,
        selectedItemHoverColor: selectedItemHoverColor,
        hideDivider: hideDivider,
        hideBulkUpdateButtons: hideBulkUpdateButtons,
        selectAllButton: this.SelectAllButton,
        unSelectAllButton: this.UnSelectAllButton
      });
    }
  }]);

  return ListSelector;
}(_react.Component);

ListSelector.defaultProps = {
  unSelectedList: [],
  selectedList: [],
  style: {},
  disableHoverColor: false,
  unSelectedItemHoverColor: '',
  selectedItemHoverColor: '',
  onUnselectedItemClick: function onUnselectedItemClick() {},
  onSelectedItemClick: function onSelectedItemClick() {},
  onClick: function onClick() {},
  hideDivider: false,
  hideBulkUpdateButtons: true,
  onSelectAllClick: function onSelectAllClick() {},
  onUnSelectAllClick: function onUnSelectAllClick() {}
};
exports.default = ListSelector;