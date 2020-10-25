import React from "react";

const Tsukamoto = ({ z1, z2, rule1, rule2, rule3, rule4 }) => {
  const diff = z2 - z1;
  const z1Tsukamoto = z2 - rule1 * diff;
  const z2Tsukamoto = z2 - rule2 * diff;
  const z3Tsukamoto = rule3 * diff + z1;
  const z4Tsukamoto = rule4 * diff + z1;
  const sumZ =
    z1Tsukamoto * rule1 +
    z2Tsukamoto * rule2 +
    z3Tsukamoto * rule3 +
    z4Tsukamoto * rule4;
  const sumRule = rule1 + rule2 + rule3 + rule4;
  const Zfinale = sumZ / sumRule;
  return (
    <div>
      <h1 className="font-bold text-xl py-2">Tsukamoto.</h1>
      z1 :{z1Tsukamoto}
      z2 :{z2Tsukamoto}
      z3 :{z3Tsukamoto}
      z4 :{z4Tsukamoto}
      <br /> Z = {Math.ceil(Zfinale)}
    </div>
  );
};

export default Tsukamoto;
