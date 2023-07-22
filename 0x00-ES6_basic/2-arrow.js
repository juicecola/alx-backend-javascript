export default function getNeighborhoodsList() {
	this.sanFrancisconeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = (newNeighborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
