import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
/*this page is the layout of homepage
In this tsx file, it will display a greeting to the user as well
as display their current balance.
*/
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