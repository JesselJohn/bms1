!function () {
	function NumberInp(selector) {
		this.selector = document.querySelector(selector);

		if (this.selector === null) {
			throw new Error("1st param is not a proper selector or No match found.");
		}
	}

	NumberInp.prototype.watch = function(onEnter) {
		this.selector.addEventListener("keydown", (e) => {
			const { keyCode } = e;
			console.log(keyCode);
			if ((keyCode < 48 || keyCode > 57) && !/^(8|13|46|188|189)$/.test(keyCode)) {
				e.preventDefault();
				return;
			}

			if (keyCode === 13) {
				onEnter(e);
				this.selector.value = "";
			}
		});
	}


	window.NumberInp = function(selector, onEnter) {
		const inst = new NumberInp(selector);
		inst.watch(onEnter);
		return inst;
	}
}();
