import React from "react";

const Mamdani = ({ a1, a2, max, min, z1, z2 }) => {
  const M1 = (min / 2) * a1 * a1;
  const diff = z2 - z1;
  const dz = z1 / diff;
  const dzz1 = (dz / 2) * a1 * a1;
  const dzz2 = (dz / 2) * a2 * a2;
  const dza2 = dz * a2;
  const dzA1 = dz * a1;
  const max2 = 0.000067 * a2 * a2 * a2;
  const min2 = 0.000067 * a1 * a1 * a1;
  const m2a = max2 - dzz2;
  const m2b = min2 - dzz1;
  const M2 = m2a - m2b;
  const M3 = (max / 2) * z2 * z2 - (max / 2) * a2 * a2;
  const A1 = min * a1;
  const A2a = (a2 * a2) / (diff * 2) - dza2;
  const A2b = (a1 * a1) / (diff * 2) - dzA1;
  const A2 = A2a - A2b;
  const A3 = max * z2 - max * a2;
  const Msum = M1 + M2 + M3;
  const Asum = A1 + A2 + A3;
  const z3 = Msum / Asum;
  return (
    <div>
      <div>
        a1 :{a1} a2 : {a2} m1 : {M1} m2 : {M2} m3 : {M3} <br />
        A1 : {A1} A2 : {A2} A3 : {A3}
        Zakhir = {Math.ceil(z3)}
      </div>
    </div>
  );
};

export default Mamdani;
