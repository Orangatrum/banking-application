import HeaderBox from '@/components/HeaderBox'

const Home = () =>{
    const loggedIn = {FirstName: 'Quinton'}
    return(
        <section className= "home" >
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title = "Welcome"
                    user = {loggedIn?.FirstName || 'Guest'}
                    subtext = "Access and manage your account and transactions."
                    />
                </header>
            </div>
        </section>
    )
}
export default Home