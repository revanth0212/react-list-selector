// @flow

import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import RightArrow from 'material-ui/svg-icons/navigation/arrow-forward'
import LeftArrow from 'material-ui/svg-icons/navigation/arrow-back'

import ListSelectorView from './ListSelector.view'

import type {
  ListSelectorStateType,
  ListSelectorPropTypes,
  ListItemConfigWithoutOnClick,
  ListItemConfigType,
} from './ListSelector.types'

class ListSelector extends Component<ListSelectorPropTypes, ListSelectorStateType> {
  static defaultProps = {
    unSelectedList: [],
    selectedList: [],
    style: {},
    disableHoverColor: false,
    unSelectedItemHoverColor: '',
    selectedItemHoverColor: '',
    onUnselectedItemClick: () => {},
    onSelectedItemClick: () => {},
    onClick: () => {},
    hideDivider: false,
    hideBulkUpdateButtons: true,
    onSelectAllClick: () => {},
    onUnSelectAllClick: () => {},
  }

  constructor(props: ListSelectorPropTypes) {
    super(props)
    this.state = {
      unSelectedList: props.unSelectedList || [],
      selectedList: props.selectedList || [],
    }
  }

  componentWillReceiveProps({ unSelectedList, selectedList }: ListSelectorPropTypes) {
    this.setState({
      unSelectedList,
      selectedList,
    })
  }

  onUnselectedItemClick = (id: number) => {
    const { unSelectedList, selectedList } = this.state
    const { list1: updatedUnSelectedList, list2: updatedSelectedList, movedItem } = this.moveItemFromList1To2(
      unSelectedList,
      selectedList,
      id
    )
    this.setState(
      {
        unSelectedList: updatedUnSelectedList,
        selectedList: updatedSelectedList,
      },
      () => {
        this.props.onUnselectedItemClick(movedItem)
        this.props.onClick(movedItem, true)
      }
    )
  }

  onSelectedItemClick = (id: number) => {
    const { unSelectedList, selectedList } = this.state
    const { list1: updatedSelectedList, list2: updatedUnSelectedList, movedItem } = this.moveItemFromList1To2(
      selectedList,
      unSelectedList,
      id
    )
    this.setState(
      {
        unSelectedList: updatedUnSelectedList,
        selectedList: updatedSelectedList,
      },
      () => {
        this.props.onSelectedItemClick(movedItem)
        this.props.onClick(movedItem, false)
      }
    )
  }

  getUnSelectedList = () => this.state.unSelectedList

  getSelectedList = () => this.state.selectedList

  selectAll = () => {
    const disabledItems = []
    const enabledItems = []
    this.state.unSelectedList.forEach((unselectedItem) => {
      if (unselectedItem.disabled) {
        disabledItems.push(unselectedItem)
      } else {
        enabledItems.push(unselectedItem)
      }
    })
    this.setState(
      {
        unSelectedList: disabledItems,
        selectedList: [...this.state.selectedList, ...enabledItems],
      },
      this.props.onSelectAllClick
    )
  }

  unSelectAll = () => {
    const disabledItems = []
    const enabledItems = []
    this.state.selectedList.forEach((selectedItem) => {
      if (selectedItem.disabled) {
        disabledItems.push(selectedItem)
      } else {
        enabledItems.push(selectedItem)
      }
    })
    this.setState(
      {
        selectedList: disabledItems,
        unSelectedList: [...this.state.unSelectedList, ...enabledItems],
      },
      this.props.onUnSelectAllClick
    )
  }

  SelectAllButton = (
    <div onClick={this.selectAll}>
      {this.props.SelectAllButton ? (
        this.props.SelectAllButton
      ) : (
        <FlatButton
          backgroundColor="rgba(80, 57, 198, 1)"
          hoverColor="rgba(80, 57, 198, 0.9)"
          icon={<RightArrow color="white" />}
          style={{
            marginTop: 12,
          }}
          fullWidth
        />
      )}
    </div>
  )

  UnSelectAllButton = (
    <div onClick={this.unSelectAll}>
      {this.props.UnSelectAllButton ? (
        this.props.UnSelectAllButton
      ) : (
        <FlatButton
          backgroundColor="rgba(80, 57, 198, 1)"
          hoverColor="rgba(80, 57, 198, 0.9)"
          icon={<LeftArrow color="white" />}
          style={{
            marginTop: 12,
          }}
          fullWidth
        />
      )}
    </div>
  )

  moveItemFromList1To2 = (
    list1: Array<ListItemConfigWithoutOnClick>,
    list2: Array<ListItemConfigWithoutOnClick>,
    id: number
  ): {
    list1: Array<ListItemConfigWithoutOnClick>,
    list2: Array<ListItemConfigWithoutOnClick>,
    movedItem: ListItemConfigWithoutOnClick,
  } => {
    const { updatedList: updatedList1, itemObject } = this.popIdFromList(list1, id)
    const updatedList2 = this.pushItemIntoList(list2, itemObject)
    return {
      list1: updatedList1,
      list2: updatedList2,
      movedItem: itemObject,
    }
  }

  popIdFromList = (
    itemsList: Array<ListItemConfigWithoutOnClick>,
    id: number
  ): { updatedList: Array<ListItemConfigWithoutOnClick>, itemObject: ListItemConfigWithoutOnClick } => {
    const updatedList = []
    let objectWithGivenId = {}
    itemsList.forEach((itemObject) => {
      if (itemObject.id === id) {
        objectWithGivenId = itemObject
      } else {
        updatedList.push(itemObject)
      }
    })
    return {
      updatedList,
      itemObject: objectWithGivenId,
    }
  }

  pushItemIntoList = (
    itemsList: Array<ListItemConfigWithoutOnClick>,
    itemObject: ListItemConfigWithoutOnClick
  ): Array<ListItemConfigWithoutOnClick> => {
    itemsList.push(itemObject)
    return itemsList
  }

  injectOnClick = (
    itemsList: Array<ListItemConfigWithoutOnClick>,
    onClick: (id: number) => void
  ): Array<ListItemConfigType> => itemsList.map((itemConfig) => ({ ...itemConfig, onClick }))

  render() {
    const { unSelectedList, selectedList } = this.state
    const {
      style,
      disableHoverColor,
      unSelectedItemHoverColor,
      selectedItemHoverColor,
      hideDivider,
      hideBulkUpdateButtons,
    } = this.props
    return (
      <ListSelectorView
        unSelectedList={this.injectOnClick(unSelectedList, this.onUnselectedItemClick)}
        selectedList={this.injectOnClick(selectedList, this.onSelectedItemClick)}
        style={style}
        disableHoverColor={disableHoverColor}
        unSelectedItemHoverColor={unSelectedItemHoverColor}
        selectedItemHoverColor={selectedItemHoverColor}
        hideDivider={hideDivider}
        hideBulkUpdateButtons={hideBulkUpdateButtons}
        selectAllButton={this.SelectAllButton}
        unSelectAllButton={this.UnSelectAllButton}
      />
    )
  }
}

export default ListSelector
