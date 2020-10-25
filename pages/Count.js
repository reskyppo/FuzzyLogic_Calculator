import Mamdani from "./Mamdani";
import Tsukamoto from "./Tsukamoto";
const Count = ({ sum1, sum2, sum3, sum4, z1, z2 }) => {
  const rule1 = Math.min(sum1, sum4);
  const rule2 = Math.min(sum1, sum3);
  const rule3 = Math.min(sum2, sum4);
  const rule4 = Math.min(sum2, sum3);
  const Z1 = parseInt(z1);
  const Z2 = parseInt(z2);
  return (
    <div>
      <div className="py-2 flex flex-row">
        <div className="w-1/4 pr-2">rule1 {rule1}</div>
        <div className="w-1/4 pr-2">rule2 {rule2}</div>
        <div className="w-1/4 pr-2">rule3 {rule3}</div>
        <div className="w-1/4 pr-2">rule4 {rule4}</div>
      </div>
      {Math.max(rule1, rule2) > Math.max(rule3, rule4) ? (
        <div>
          <div className="py-2 flex flex-row">
            <div className="w-1/2 pr-2">max : {Math.max(rule1, rule2)}</div>
            <div className="w-1/2 pr-2">min : {Math.max(rule3, rule4)}</div>
          </div>
          <Mamdani
            a1={Math.max(rule1, rule2) * (Z2 - Z1) + Z1}
            a2={Math.max(rule3, rule4) * (Z2 - Z1) + Z1}
            z1={Z1}
            z2={Z2}
            min={Math.max(rule3, rule4)}
            max={Math.max(rule1, rule2)}
          />
        </div>
      ) : (
        <div>
          <div className="py-2 flex flex-row">
            <div className="w-1/2 pr-2">min : {Math.max(rule1, rule2)} </div>
            <div className="w-1/2 pr-2">max {Math.max(rule3, rule4)} </div>
          </div>
          <Mamdani
            a1={Math.max(rule1, rule2) * (Z2 - Z1) + Z1}
            a2={Math.max(rule3, rule4) * (Z2 - Z1) + Z1}
            z1={Z1}
            z2={Z2}
            min={Math.max(rule1, rule2)}
            max={Math.max(rule3, rule4)}
          />
        </div>
      )}
      <div className="py-2">
        <Tsukamoto
          z1={Z1}
          z2={Z2}
          rule1={rule1}
          rule2={rule2}
          rule3={rule3}
          rule4={rule4}
        />
      </div>
    </div>
  );
};

export default Count;
