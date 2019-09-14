!function() {
	const existingArray = [];
	let duplicateArr = [];
	let timeoutId;

	function showErr(err) {
		const errorBlk = document.querySelector(".bms-error");
		errorBlk.innerHTML = err;

		setTimeout(function() {
			errorBlk.innerHTML = "";
		}, 3000);
	}

	function handleSingleNumber(num) {
		const isSingleNumber = /^\d+$/.test(num);
		const strToNum = parseInt(num, 10);

		if (isSingleNumber && !existingArray.includes(strToNum)) {
			existingArray.push(strToNum);
		} else {
			duplicateArr.push(strToNum);
		}
	}

	function handleRange(range) {
		const rangeVals = range.split("-");
		const minVal = parseInt(rangeVals[0], 10);
		const maxVal = parseInt(rangeVals[1], 10);

		if (minVal > maxVal) {
			showErr("minVal is greater than maxVal");
			return;
		}

		for (let i = minVal ; i <= maxVal; i++) {
			handleSingleNumber(i);
		}
	}

	NumberInp(".bms-inp", function(e) {
		const {value} = e.target;
		const isSingleNumber = /^\d+$/.test(e.target.value);

		if (isSingleNumber) {
			handleSingleNumber(value);
		} else {
			value.split(",").forEach(val => {
				const isRange = /-/g.test(val);
				if (isRange) {
					handleRange(val);
				} else {
					handleSingleNumber(val);
				}
			});
		}

		alert(`
			existingArray: ${existingArray}
			duplicateValues: ${duplicateArr}
		`);
	});
}();
