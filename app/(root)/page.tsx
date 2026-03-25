import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

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
                    <TotalBalanceBox accounts = {[]} totalBanks={1} totalCurrentBalance={1250.32}>
                        
                    </TotalBalanceBox>
                </header>
            </div>
        </section>
    )
}
export default Home