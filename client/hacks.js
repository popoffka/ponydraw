/*
© 2012 Aleksejs Popovs <me@popoffka.ru>
Licensed under MIT License. See ../LICENSE for more info.
*/

Element.prototype.getElementWidth = function() {
	if (typeof this.clip !== "undefined") {
		return this.clip.width;
	} else {
		if (this.style.pixelWidth) {
			return this.style.pixelWidth;
		} else {
			return this.offsetWidth;
		}
	}
};

Element.prototype.getElementHeight = function() {
	if (typeof this.clip !== "undefined") {
		return this.clip.height;
	} else {
		if (this.style.pixelHeight) {
			return this.style.pixelHeight;
		} else {
			return this.offsetHeight;
		}
	}
};

function layerSorter(a, b) {
	return (b.zIndex - a.zIndex);
}
