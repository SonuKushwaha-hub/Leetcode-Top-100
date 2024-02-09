var lengthOfLongestSubstring = function (s) {
	// initial case return
	if (s.length === 0) return 0;

	let st = new Set();
	let j = 0, maxi = 1;
	for (let i = 0; i < s.length; i++) {
		// if element already exists in set, deleting from j-index till repeating element is deleted fro set
		if (st.has(s[i])) {
			while (st.has(s[i])) {
				st.delete(s[j++]);
			}
		}
		st.add(s[i]);
		// continuously checking for max size of set
		maxi = Math.max(maxi, i - j + 1);
	}
	return maxi;
};

// testing code
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));