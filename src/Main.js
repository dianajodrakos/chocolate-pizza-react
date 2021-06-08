import React from 'react';
import ingredients from './data.js';

class ImageSection extends React.Component {
    render() {
        return (
            <div>
            <img src="choco-pizza.png" alt="chocolate pizza" width="100%" />
            </div>
        );
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div className="content">
            <p>
                For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. 
                Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. 
                Add salt with one or two stirs, set aside and let cool completely.
            </p>
            <p>
                Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm.
                Whisk in the egg yolks. Set mixture in the fridge and wait until the fig micture is cooled.
            </p>
            <p>
                Using an ice cream machine, pour liquids into the frozen basin and process according to the manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding masacarpone, fig jam mixture, and the nuts
                Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
            </p>
        </div>
        );
    }
}

class IngredientList extends React.Component {
    render() {
        return (
            <div className="list">
                <ul className="ingredients">
                    {
                        ingredients.map((item) => <IngredientItem amount={item.amount} name={item.name} />)
                    }
                </ul>
            </div>
        );
    }
}

class IngredientItem extends React.Component {
    render() {
        return (
            <li>
                <label className="ingredient">
                    <input type="checkbox" />
                    <span>{this.props.amount} {this.props.name}</span>
                    </label>
            </li>
        )
    }
}

export class Main extends React.Component {
    render() {
        return (
            <main>
                
                <div className="boared">
                </div>

                <div className="title">
                    <h2>Chocolate Pizza</h2>
                    <h6>
                        <span>Posted on 15 Dec 2013 / Desserts</span>
                        <span><img src="print-icon.png" alt="print button" /> Print</span>
                    </h6>
                </div>
                
                <ImageSection />
                <Recipe />
                <IngredientList />

                <div className="boared">
                </div>

                <div className="author">
                    <img src="van-pic.png" width="65px" height="65px" alt="Vanessa Stevenson" />
                        <section>
                            <h5>Vanessa Stevenson</h5>
                            <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                    </section>
                    <button type="button">Share Recipe</button>
                </div>
            </main>
        );
    }
}