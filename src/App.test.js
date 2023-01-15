import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
    //re-initailize data
    fetch.resetMocks()
})

describe('Github api name renders to screen', () => {
    test('Github api name renders to screen', async () => {
        fetch.mockResponseOnce(JSON.stringify({site_admin: false}))
        render(<App />)
        const headerEl = await waitFor(() => screen.getByRole('heading', {level : 2}))
        expect(headerEl).toHaveTextContent('Site_Admin: false')
    })
})


