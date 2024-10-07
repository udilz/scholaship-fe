import { IDataScholarship } from "../types/scholarship.types";

interface ScholarshipTableProps {
  scholarships: IDataScholarship[];
  onDelete: (id: string) => void;
}

export const ScholarshipTable = ({ scholarships, onDelete }: ScholarshipTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Beasiswa
            </th>
            <th scope="col" className="px-6 py-3">
              Link Beasiswa
            </th>
            <th scope="col" className="px-6 py-3">
              Negara
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Tipe Pendanaan Beasiswa
            </th>
            <th scope="col" className="px-6 py-3">
              jenjang beasiswa
            </th>
            <th scope="col" className="px-6 py-3">
              Jurusan
            </th>
            <th scope="col" className="px-6 py-3">
              Open Date
            </th>
            <th scope="col" className="px-6 py-3">
              Close Date
            </th>
            <th scope="col" className="px-6 py-3">
              Deskripsi
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship, index) => (
            <tr key={scholarship._id} className="border-b bg-white">
              <td className="px-6 py-4">{index + 1}</td>
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                {scholarship.name}
              </th>
              <td className="px-6 py-4">
              <a href={scholarship.url_web} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {scholarship.url_web}
              </a>
             </td>
              <td className="px-6 py-4">{scholarship.country}</td>
              <td className="px-6 py-4">{scholarship.city}</td>
              <td className="px-6 py-4">{scholarship.funding_type}</td>
              <td className="px-6 py-4">{scholarship.degrees}</td>
              <td className="px-6 py-4">{scholarship.major}</td>
              <td className="px-6 py-4">{new Date(scholarship.open_date).toLocaleDateString('id-ID')}</td>
              <td className="px-6 py-4">{new Date(scholarship.close_date).toLocaleDateString('id-ID')}</td>
              <td className="px-6 py-4">{scholarship.description}</td>
              <td className="space-x-4 px-6 py-4">
                <a href="#" className="text-red-500" onClick={()=> onDelete(scholarship._id)}>
                  delete
                </a>
                <a href="#" className="text-blue-600">
                  edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
