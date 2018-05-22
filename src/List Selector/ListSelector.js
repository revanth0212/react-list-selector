// @flow

import React, { Component } from 'react'

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
  }

  constructor(props: ListSelectorPropTypes) {
    super(props)
    this.state = {
      unSelectedList: props.unSelectedList || [],
      selectedList: props.selectedList || [],
    }
  }

  onUnselectedItemClick = (id: number) => {
    const { unSelectedList, selectedList } = this.state
    const { list1: updatedUnSelectedList, list2: updatedSelectedList, movedItem } = this.moveItemFromList1To2(
      unSelectedList,
      selectedList,
      id
    )
    this.setState({
      unSelectedList: updatedUnSelectedList,
      selectedList: updatedSelectedList,
    })
    this.props.onUnselectedItemClick(movedItem)
  }

  onSelectedItemClick = (id: number) => {
    const { unSelectedList, selectedList } = this.state
    const { list1: updatedSelectedList, list2: updatedUnSelectedList, movedItem } = this.moveItemFromList1To2(
      selectedList,
      unSelectedList,
      id
    )
    this.setState({
      unSelectedList: updatedUnSelectedList,
      selectedList: updatedSelectedList,
    })
    this.props.onSelectedItemClick(movedItem)
  }

  getUnSelectedList = () => this.state.unSelectedList

  getSelectedList = () => this.state.selectedList

  moveItemFromList1To2 = (
    list1: Array<ListItemConfigWithoutOnClick>,
    list2: Array<ListItemConfigWithoutOnClick>,
    id: number
  ) => {
    const { updatedList: updatedList1, itemObject } = this.popIdFromList(list1, id)
    const updatedList2 = this.pushItemIntoList(list2, itemObject)
    return {
      list1: updatedList1,
      list2: updatedList2,
      movedItem: itemObject,
    }
  }

  popIdFromList = (itemsList: Array<ListItemConfigWithoutOnClick>, id: number) => {
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

  pushItemIntoList = (itemsList: Array<ListItemConfigWithoutOnClick>, itemObject: ListItemConfigWithoutOnClick) => {
    itemsList.push(itemObject)
    return itemsList
  }

  injectOnClick = (
    itemsList: Array<ListItemConfigWithoutOnClick>,
    onClick: (id: number) => void
  ): Array<ListItemConfigType> => itemsList.map((itemConfig) => ({ ...itemConfig, onClick }))

  render() {
    const { unSelectedList, selectedList } = this.state
    const { style, disableHoverColor, unSelectedItemHoverColor, selectedItemHoverColor } = this.props
    return (
      <ListSelectorView
        unSelectedList={this.injectOnClick(unSelectedList, this.onUnselectedItemClick)}
        selectedList={this.injectOnClick(selectedList, this.onSelectedItemClick)}
        style={style}
        disableHoverColor={disableHoverColor}
        unSelectedItemHoverColor={unSelectedItemHoverColor}
        selectedItemHoverColor={selectedItemHoverColor}
      />
    )
  }
}

export default ListSelector
