import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "../components/ui/select";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const QueueStatus = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients data:", err);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (patient) =>
        statusFilter === "All" || patient.priorityCategory === statusFilter
    );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-600"; // Red
      case "Medium":
        return "bg-yellow-500"; // Yellow
      case "Low":
        return "bg-green-500"; // Green
      default:
        return "bg-gray-300"; // Default gray color
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Patient Queue Status
      </h1>

      {/* Search Input */}
      <Input
        placeholder="Search Patient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-3 border-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filter by Priority */}
      <Select
        value={statusFilter}
        onValueChange={(val) => setStatusFilter(val)}
      >
        <SelectTrigger className="mb-6 w-full p-3 border-2 rounded-lg bg-white text-gray-800">
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All Priorities</SelectItem>
              <SelectItem value="High">High Priority</SelectItem>
              <SelectItem value="Medium">Medium Priority</SelectItem>
              <SelectItem value="Low">Low Priority</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      {/* List of Patient Queue Status */}
      <div className="space-y-6">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <Card
              key={patient._id}
              className="transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl bg-white rounded-lg overflow-hidden"
            >
              <CardHeader
                className={`${getPriorityColor(
                  patient.priorityCategory
                )} p-4 rounded-t-md flex items-center justify-between`}
              >
                <Badge className="text-white font-bold text-lg">
                  {patient.priorityCategory}
                </Badge>
                <div className="text-white font-semibold text-lg">
                  {patient.name}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-gray-800 font-semibold">
                  Age: {patient.age} years
                </div>
                <div className="text-gray-600 mt-2">
                  <strong>Symptoms:</strong> {patient.symptoms}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default QueueStatus;
