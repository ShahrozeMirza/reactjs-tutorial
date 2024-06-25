export default function Tabs({ children, buttons, ButtonsContainer = 'menu4' }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}