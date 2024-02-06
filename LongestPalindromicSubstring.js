var longestPalindrome = function(s) {
  let ans = "";
  const n=s.length;
  let maxi=0;
  for(let i=0;i<n;i++){
		// staring left and right from same middle point for odd size substring
		let left=i, right=i;
		while(left>=0 && right<n && s[left]===s[right]){
			if(right-left+1>maxi){
				maxi=right-left+1;
				ans=s.substring(left,right+1);
			}
			left--;
			right++;
		}

		//satring left and right from adjacent for even size substring
		left=i, right=i-1;
		while(left>=0 && right<n && s[left]===s[right]){
			if(right-left+1>maxi){
				maxi=right-left+1;
				ans=s.substring(left,right+1);
			}
			left--;
			right++;
		}
	}
  return ans;
};

// testing code
const s = "babac";
console.log(longestPalindrome(s));