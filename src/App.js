import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import RightArrow from 'material-ui/svg-icons/navigation/arrow-forward'
import LeftArrow from 'material-ui/svg-icons/navigation/arrow-back'

import ListSelector from './ListSelector'

const SelectAllButton = () => (
  <FlatButton
    backgroundColor="rgba(80, 57, 198, 1)"
    hoverColor="rgba(80, 57, 198, 0.9)"
    icon={<RightArrow color="white" />}
    style={{
      marginTop: 12,
    }}
    fullWidth
  />
)

const UnSelectAllButton = () => (
  <FlatButton
    backgroundColor="rgba(80, 57, 198, 1)"
    hoverColor="rgba(80, 57, 198, 0.9)"
    icon={<LeftArrow color="white" />}
    style={{
      marginTop: 12,
    }}
    fullWidth
  />
)

const sampleData = {
  unSelectedList: [
    {
      id: 1,
      disabled: false,
      primaryText: 'Item 1',
      secondaryText: "This is Item 1 's secondary text.",
    },
    {
      id: 2,
      disabled: false,
      primaryText: 'Item 2',
      secondaryText: "This is Item 2 's secondary text.",
    },
    {
      id: 3,
      disabled: false,
      primaryText: 'Item 3',
      secondaryText: "This is Item 3 's secondary text.",
    },
    {
      id: 4,
      disabled: true,
      primaryText: 'Item 4',
      secondaryText: 'I am disabled',
    },
    {
      id: 5,
      disabled: false,
      primaryText: 'Item 5',
      secondaryText: "This is Item 5 's secondary text.",
    },
    {
      id: 6,
      disabled: false,
      primaryText: 'Item 6',
      secondaryText: 'I am being rendered with custom style.',
      style: { border: '5px solid #30069d' },
    },
  ],
  selectedList: [
    {
      id: 7,
      disabled: false,
      primaryText: 'Item 7',
      secondaryText: "This is Item 7 's secondary text.",
    },
    {
      id: 8,
      disabled: false,
      primaryText: 'Item 8',
      secondaryText: 'I am being rendered with custom style.',
      style: { border: '5px solid #23269d' },
    },
  ],
  style: {
    border: '1px solid grey',
    padding: '15px',
    margin: '0px 10px 10px 10px',
    minHeight: '450px',
    minWidth: '300px',
  },
  disableHoverColor: false,
  unSelectedItemHoverColor: '#14569d',
  selectedItemHoverColor: 'orange',
  SelectAllButton,
  UnSelectAllButton,
  hideBulkUpdateButtons: false,
}

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-shadow */
class App extends Component {
  render() {
    const {
      unSelectedList,
      selectedList,
      style,
      disableHoverColor,
      unSelectedItemHoverColor,
      selectedItemHoverColor,
      hideBulkUpdateButtons,
      SelectAllButton,
      UnSelectAllButton,
    } = sampleData
    return (
      <MuiThemeProvider>
        <ListSelector
          ref={(node) => {
            this.listSeperator = node
          }}
          unSelectedList={unSelectedList}
          selectedList={selectedList}
          style={style}
          disableHoverColor={disableHoverColor}
          unSelectedItemHoverColor={unSelectedItemHoverColor}
          selectedItemHoverColor={selectedItemHoverColor}
          hideBulkUpdateButtons={hideBulkUpdateButtons}
          SelectAllButton={<SelectAllButton />}
          UnSelectAllButton={<UnSelectAllButton />}
        />
      </MuiThemeProvider>
    )
  }
}
/* eslint-enable no-shadow */
/* eslint-enable react/prefer-stateless-function */

export default App
