import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ListSelector from './List Selector'

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
    margin: '10px',
    minHeight: '250px',
  },
  disableHoverColor: false,
  unSelectedItemHoverColor: '#14569d',
  selectedItemHoverColor: 'orange',
}

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    const {
      unSelectedList,
      selectedList,
      style,
      disableHoverColor,
      unSelectedItemHoverColor,
      selectedItemHoverColor,
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
        />
      </MuiThemeProvider>
    )
  }
}
/* eslint-enable react/prefer-stateless-function */

export default App
