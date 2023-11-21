export const Table = () => {
    return (
        <>
            <table className="w-full min-w-max table-auto text-left w-80 mx-auto">
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            Classement
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            Joueur
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            Equipe
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            M
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            MJ
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            RPM
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            PDPM
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            MPM
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            FG%
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            3P%
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            %LF
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}