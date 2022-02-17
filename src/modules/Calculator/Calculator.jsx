const btn = "text-2xl	text-gray-700 w-16 m-1 p-1 rounded-lg";

const Calculator = () => {
  return (
    <div className="my-5 hidden grow justify-center sm:flex lg:mx-2">
      <table dir="ltr" className="table border-2 border-gray-600 p-2">
        <thead>
          <tr>
            <td colspan="7">
              <div className="output mb-0">
                <input
                  type="text"
                  className="ans text-4xl	text-gray-700"
                  style={{ height: "60px" }}
                  readonly
                  name=""
                />
              </div>
            </td>
          </tr>
        </thead>
        <tbody className="actions">
          <tr>
            <td colspan="3"></td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="*(">
                (
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value=")">
                )
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="%">
                %
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="ce">
                CE
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="inv"
              >
                Inv
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="sin"
              >
                sin
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="ln"
              >
                ln
              </button>
            </td>
            <td>
              <button className={btn} data-value="7">
                7
              </button>
            </td>
            <td>
              <button className={btn} data-value="8">
                8
              </button>
            </td>
            <td>
              <button className={btn} data-value="9">
                9
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="/">
                &#x00f7;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block  ${btn}`}
                data-value="*3.14"
              >
                &pi;
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block  ${btn}`}
                data-value="cos"
              >
                cos
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block  ${btn}`}
                data-value="log"
              >
                log
              </button>
            </td>
            <td>
              <button className={btn} data-value="4">
                4
              </button>
            </td>
            <td>
              <button className={btn} data-value="5">
                5
              </button>
            </td>
            <td>
              <button className={btn} data-value="6">
                6
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="*">
                {" "}
                &times;
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="e"
              >
                e
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="tan"
              >
                tan
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="radic"
              >
                &radic;
              </button>
            </td>
            <td>
              <button className={btn} data-value="3">
                3
              </button>
            </td>
            <td>
              <button className={btn} data-value="2">
                2
              </button>
            </td>
            <td>
              <button className={btn} data-value="1">
                1
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="-">
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="exp"
              >
                EXP
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="x^2"
              >
                x&#xb2;
              </button>
            </td>
            <td>
              <button
                className={`hidden bg-slate-400 sm:block ${btn}`}
                data-value="**"
              >
                x&#94;
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value=".">
                .
              </button>
            </td>
            <td>
              <button className={btn} data-value="0">
                0
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="=">
                =
              </button>
            </td>
            <td>
              <button className={`bg-slate-400 ${btn}`} data-value="+">
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
