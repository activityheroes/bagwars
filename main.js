const tweets = [
  "Why did Ethereum go broke? Because it spent all its money on gas! ⛽💸",
  "Why doesn’t Ethereum ever show up on time? Because it’s been ‘almost ready’ since 2017! ⏳😂",
  "Why did the Ethereum transaction take so long? Because even a snail confirmed it first! 🐌⏳",
  "Why did Ethereum get jealous of Bitcoin? Because Bitcoin was feeling ‘proof of work’ and Ethereum was stuck in ‘proof of stake’! 💀😂",
  "Why did the Ethereum user walk to work? Because they couldn’t afford gas! ⛽🚶💸",
  "Why did the Ethereum NFT collector cry? Because they bought a JPEG for $50K and now it’s worth 50 cents! 😭🖼️",
  "What did Ethereum say when it finally completed the merge? ‘Sorry for the delay, I was just staking my time!’ ⏳🤣",
  "Why did the Ethereum investor go to therapy? Because they bought at $4,800 and now they need emotional support! 📉💀",
  "Why did the smart contract fail? Because it wasn’t smart enough to dodge the gas fees! 🤦‍♂️",
  "What’s the difference between Ethereum and a car? At least the car gives you gas when you pay for it! 🚗⛽😂",
  "Why did Ethereum go to college? To finally graduate from proof of work! 🎓😂",
  "How do you know an Ethereum user is rich? They paid a gas fee and didn’t complain about it! 💰⛽😂",
  "Why did the Ethereum investor get stuck in a loop? Because they took out a loan in DeFi to pay for gas fees… and needed another loan to repay the first! 🔄💸",
  "Why did Ethereum and Solana break up? Because Ethereum kept lagging, and Solana kept going offline! 🛑💀",
  "What’s the best way to double your Ethereum? Buy at the top and wait for the dip! 📉💀",
  "Why did Ethereum users move to Layer 2? Because they wanted to get out of their toxic relationship with gas fees! ⛽💔",
  "Why do Ethereum traders never get bored? Because they’re always watching their money disappear in real-time! 💸😂",
  "What’s an Ethereum investor’s retirement plan? Wait for ETH 2.0 to fully roll out… in 2050! ⏳🤣",
  "Why did Ethereum switch to proof of stake? Because it was tired of working too hard! 💀💼",
  "Why do Ethereum users still prefer crypto over banks? Because even with high gas fees, it’s still faster than a wire transfer! 🏦💀",
  "Why did the Ethereum developer become a chef? Because they’re used to cooking up gas fees! 🍳⛽😂",
  "Why don’t Ethereum maxis go to amusement parks? Because they already live on a rollercoaster! 🎢📉📈",
  "Why did the Ethereum whale disappear? Because they got harpooned by a failed transaction fee! 🐋💀",
  "Ethereum holders watching gas fees drop to $1: ‘Is this real life or just fantasy?’ 🎶😂",
  "Why did the Ethereum node break up with its blockchain? It couldn’t handle the commitment issues! 💔🔗",
  "Ethereum transactions are like relationships—sometimes they fail, and you still have to pay for them! 💀💸",
  "Why did the Ethereum trader go to the doctor? Too many gas fees gave them high blood pressure! ⛽🩺😂",
  "Ethereum devs: ‘We fixed high gas fees!’ Users: ‘Great, how much is it now?’ Devs: ‘Only $50 per transaction.’ 💀💸",
  "Why did Ethereum try to mint an NFT of itself? Because it wanted to prove it was still valuable! 😂",
  "ETH 2.0 is like Half-Life 3—always coming ‘soon.’ ⏳😂",
  "Ethereum is the only place where you can lose money even when your transaction fails! 💀💸",
  "Why did the Ethereum transaction go to therapy? It kept getting rejected due to low gas fees. 😭⛽",
  "Ethereum is like a long-distance relationship—high commitment, expensive, and takes forever! 💀😂",
  "Ethereum traders don’t need horror movies—the price chart is scary enough! 📉👻😂",
  "Why did the Ethereum whale switch to Bitcoin? Because they got tired of swimming through gas fees! 🐋⛽💀",
  "Ethereum maxis watching Solana pump: ‘That’s cute… until it crashes again.’ 😂📉",
  "Ethereum’s biggest upgrade? Convincing people to keep HODLing. 💀😂",
  "Why did the Ethereum dev open a bakery? They’re experts at making ‘proof of stake’! 🍞🤣",
  "Why do Ethereum holders always carry tissues? For when they check their portfolio. 😭📉",
  "Why did the Ethereum investor go missing? Last seen checking gas fees before a transaction. ⛽💀",
  "Why did Ethereum take forever to respond? It was stuck waiting for confirmation. ⏳😂"
];

function updateTweet() {
  const quote = document.getElementById('tweet-quote');
  const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
  quote.style.opacity = 0;
  
  setTimeout(() => {
    quote.textContent = `${randomTweet} - Hodl-ArK`;
    quote.style.opacity = 1;
  }, 500);
}

// Update tweet every 10 seconds
setInterval(updateTweet, 10000);
updateTweet(); // Initial tweet

// Copy contract address with cool effect
document.getElementById('copy-btn').addEventListener('click', async () => {
  const contractAddress = document.getElementById('contract-address').textContent;
  try {
    await navigator.clipboard.writeText(contractAddress);
    const btn = document.getElementById('copy-btn');
    btn.style.backgroundColor = 'var(--primary)';
    btn.style.color = 'var(--background)';
    btn.textContent = 'Copied!';
    
    setTimeout(() => {
      btn.style.backgroundColor = 'transparent';
      btn.style.color = 'var(--primary)';
      btn.textContent = 'Copy';
    }, 2000);
  } catch (err) {
    alert('Failed to copy!');
  }
});

// Add hover effect to buttons
document.querySelectorAll('.cyber-btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'translateY(-2px)';
  });
  
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'translateY(0)';
  });
});
