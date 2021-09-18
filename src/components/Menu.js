import React from 'react';
import './css/Menu.css';
const Menu = () => {
    let campfire = new Audio("/sounds/campfire.mp3")
    let forest = new Audio("/sounds/forest.mp3")
    let water = new Audio("/sounds/rowing.mp3")
    let train = new Audio("/sounds/train.mp3")

    const campfirePlay = () => {
        campfire.play()
    }

    const forestPlay = () => {
        forest.play()
    }

    const waterPlay = () => {
        water.play()
    }

    const trainPlay = () => {
        train.play()
    }

    return (
		<div class="main">
			<input type="checkbox" id="drop-4"/>
			<label for="drop-4" class="bg-info">
				<a class="btn btn-primary dropHeader dropHeader-4">
					<i class="fab fa-napster"></i>
				</a>
			</label>

			<div class="list list-4">
				<div class="item" onClick={forestPlay}>
					<i class="fas fa-tree"></i>Forest
				</div>
				<div class="item" onClick={waterPlay}>
					<i class="fas fa-water"></i>Water
				</div>
				<div class="item" onClick={trainPlay}>
					<i class="fas fa-train"></i>Train
				</div>
				<div class="item" onClick={campfirePlay}>
					<i class="fas fa-fire"></i>Campfire
				</div>
			</div>
		</div>
	);
}
export default Menu;
