import React from 'react'
import {render} from '@testing-library/react'
import Calculator from './calculator'

test('renders', () => {
  const {getByText} = render(<Calculator />)
})
