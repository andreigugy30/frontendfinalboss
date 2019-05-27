import React, {Component} from 'react';
import Navigation from '../navigation/nav';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            
            <main>
                <Navigation />
                <a className="button" href={FlowRouter.url('login')}>Login</a>
                <a className="button" href={FlowRouter.url('register')}>Register</a>

                <section className="header">
                    <img src="/images/big-img.png" alt="Big Image"/>
                    <div className="header__info">
                        <h2 className="header__title">Best donut in the city!</h2>
                        <p className="header__text">
                            Dispatched entreaties boisterous say why <br />stimulated. 
                            Certain forbade picture now prevent <br />carried she get see sitting. Up twenty limits as <br /> months.
                            Inhabit so perhaps of in to certain.
                        </p>
                    </div>
                </section>
                <section className="description">
                    <div className="description__text">
                        <h3>Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried</h3>
                        <p>Old unsatiable our now but considered travelling impression. 
                            In excuse hardly summer in basket misery. 
                            By rent an part need. At wrong of of water those linen.
                            Needed oppose seemed how all. Very mrs shed shew 
                        </p>
                    </div>
                    <div className="description__text">
                        <h3>Civility vicinity graceful is it at. Improve up at to on mention perhaps raising.</h3>
                        <p>She travelling acceptance men unpleasant her especially entreaties law. 
                            Law forth but end any arise chief arose. 
                            Old her say learn these large. 
                            Joy fond many ham high seen this. 
                            Few preferred continual sir led incommode neglected.
                        </p>
                    </div>
                    <div className="description__text">
                        <h3>Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months.</h3>
                        <p>Up twenty limits as months. Inhabit so perhaps of in to certain.</p>
                    </div>
                </section>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
