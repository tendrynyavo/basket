import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Classement", "Joueur", "Equipe", "M", "MJ", "PPM", "RPM", "PDPM", "MPM", "FG%", "3P%", "%LF"];
 
const TABLE_ROWS = [
  {
    classement: 1,
    joueur: "Joel Embiid",
    equipe: "PHI",
    m: 13,
    mj: 13,
    ppm: 10,
    rpm: 34,
    pdpm: 13,
    mpm: 8,
    fg: 50.2,
    three: 20,
    lf: 12
  },
  {
    classement: 1,
    joueur: "Joel Embiid",
    equipe: "PHI",
    m: 13,
    mj: 13,
    ppm: 10,
    rpm: 34,
    pdpm: 13,
    mpm: 8,
    fg: 50.2,
    three: 20,
    lf: 12
  },
  {
    classement: 1,
    joueur: "Joel Embiid",
    equipe: "PHI",
    m: 13,
    mj: 13,
    ppm: 10,
    rpm: 34,
    pdpm: 13,
    mpm: 8,
    fg: 50.2,
    three: 20,
    lf: 12
  },
];
 
export function TableWithStripedRows() {
  return (
    <Card className="h-full rounded-lg w-full p-6 shadow">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr className="bg-slate-900 text-white">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ id, classement, joueur, equipe, m, mj, ppm, mpm, rpm, pdpm, fg, three, lf }, index) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {classement}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {joueur}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {equipe}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {m}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {mj}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {ppm}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {rpm}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {pdpm}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {mpm}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {fg}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {three}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {lf}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}