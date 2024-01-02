import React, { useState } from 'react'
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'
import { Toaster } from 'sonner'
export default function Providers({ children }: { children: React.ReactNode }) {

    const [themeType, setThemeType] = useState('light')
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
    }
    const dgOceanTheme = Themes.createFromLight({
        type: 'dgOceanTheme',
        palette: {
            success: 'rgb(0,105,255)',
        },
    })
    return (
        <>
            <Toaster richColors position="top-right" />
            <GeistProvider themes={[dgOceanTheme]} themeType="dgOceanTheme" >
                {/* <GeistProvider themeType={themeType}> */}
                <CssBaseline />
                {children}
            </GeistProvider>
        </>
    )
}
