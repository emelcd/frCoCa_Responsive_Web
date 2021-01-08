var i = 0;

var speed = 0;

var dict = {
  more:
    "Turing started running after the war while he was in his thirties and in August 1946, at age 33, he won his first race, a three miles track title in 15:37.8. Averaging five minutes and 12 seconds per mile is a very fast time for a beginner. Later that month, he won a three-mile handicap race in 15:20, the 20th fastest time by a Briton that year. That is pretty impressive for a 33-year-old novice who had never been an athlete.",
  comput:
    "Over the next two years, Turing studied mathematics and cryptology at the Institute for Advanced Study in Princeton, New Jersey. After receiving his Ph.D. from Princeton University in 1938, he returned to Cambridge, and then took a part-time position with the Government Code and Cypher School, a British code-breaking organization.",

  early:
    "After Sherborne, Turing enrolled at King's College (University of Cambridge) in Cambridge, England, studying there from 1931 to 1934. As a result of his dissertation, in which he proved the central limit theorem, Turing was elected a fellow at the school upon his graduation.",
  crypto:
    "Turing moved to London in the mid-1940s, and began working for the National Physical Laboratory. Among his most notable contributions while working at the facility, Turing led the design work for the Automatic Computing Engine and ultimately created a groundbreaking blueprint for store-program computers.",
  dead:
    "Turing died on June 7, 1954. Following a postmortem exam, it was determined that the cause of death was cyanide poisoning. The remains of an apple were found next to the body, though no apple parts were found in his stomach.",
};

function typeWriter(idtxt) {
  document.getElementById(idtxt + "-btn").setAttribute("disabled", "disabled");
  let wrptxt = document.getElementById(idtxt);
  if (i < dict[idtxt].length) {
    wrptxt.innerHTML += dict[idtxt].charAt(i);
    i++;
    setTimeout(() => typeWriter(idtxt), speed);
  } else {
    i = 0;
    setTimeout(() => {
        console.log("ECO")
        
    }, 2000);
    
  }
}
