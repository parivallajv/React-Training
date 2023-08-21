import { useState } from "react";

import { Card, Checkbox, Divider, Input, Select, Button } from "antd";
import {
  FilterTwoTone,
  InfoCircleOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";

const ProtectedPage = () => {
  const { Option } = Select;

  const [searchValue, setSearchValue] = useState("");
  const [filterName, setFilterName] = useState("");
  const [selectedHierarchy, setSelectedHierarchy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [selectedProfile, setSelectedProfile] = useState("Show All");
  const [selectedStatus, setSelectedStatus] = useState("Show All");
  const [columnVisibility, setColumnVisibility] = useState({
    category: true,
    users: true,
    locationName: true,
    published: true,
    createdDate: true,
    status: true,
  });

  const [savedFilters, setSavedFilters] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [filterConditionError, setFilterConditionError] = useState(false);

  const handleSaveFilter = () => {
    if (!filterName) {
      setInputError(true);
      setFilterConditionError(false);
      return;
    }

    if (
      selectedHierarchy === "" ||
      (selectedCategory === "Show All" &&
        selectedProfile === "Show All" &&
        selectedStatus === "Show All")
    ) {
      setInputError(false);
      setFilterConditionError(true);
      return;
    }

    setInputError(false);
    setFilterConditionError(false);

    const filterData = {
      filterName,
      selectedHierarchy,
      selectedCategory,
      selectedProfile,
      selectedStatus,
      columnVisibility,
    };

    setSavedFilters([...savedFilters, filterData]);
    handleClearFields();

    console.log("Filter Data:", filterData);
  };

  const handleSavedFilterClick = (savedFilter) => {
    setSearchValue(savedFilter.searchValue);
    setFilterName(savedFilter.filterName);
    setSelectedHierarchy(savedFilter.selectedHierarchy);
    setSelectedCategory(savedFilter.selectedCategory);
    setSelectedProfile(savedFilter.selectedProfile);
    setSelectedStatus(savedFilter.selectedStatus);
    setColumnVisibility(savedFilter.columnVisibility);
  };

  const handleClearFields = () => {
    setSearchValue("");
    setFilterName("");
    setSelectedHierarchy("");
    setSelectedCategory("Show All");
    setSelectedProfile("Show All");
    setSelectedStatus("Show All");
    setColumnVisibility({
      category: true,
      users: true,
      locationName: true,
      published: true,
      createdDate: true,
      status: true,
    });
    setInputError(false);
    setFilterConditionError(false);
  };

  const handleColumnVisibilityChange = (columnName, checked) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [columnName]: checked,
    }));
  };
  return (
    <div>
      <Card style={{ width: 300 }}>
        <FilterTwoTone />{" "}
        <h4 style={{ display: "inline" }}>Filter Hierarchy</h4>
        <Button
          href="#"
          style={{ display: "inline", marginLeft: "50px", cursor: "pointer" }}
          onClick={handleClearFields}
        >
          Clear
        </Button>
        <Divider />
        <p>Search</p>
        <Input
          placeholder="Search"
          style={{ width: "100%" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
        <p>Filter By Hierarchy</p>
        <Select
          placeholder="Filter By Hierarchy"
          style={{ width: 250 }}
          value={selectedHierarchy}
          onChange={(value) => setSelectedHierarchy(value)}
        >
          <Option value="Academy Mortgage">Academy Mortgage</Option>
          <Option value="Mid South">Mid South</Option>
          <Option value="Mid South">Mid Atlantic</Option>
          <Option value="Mid South">Mid America</Option>
        </Select>
        </div>
        <div>
        <p>Category</p>
        <Select
          defaultValue="Show All"
          style={{ width: 250 }}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        >
          <Option value="Show All">Show All</Option>
          <Option value="HQ">HQ</Option>
          <Option value="Region">Region</Option>
          <Option value="Branch">Branch</Option>
        </Select>
        </div>
        <div>
        <p>Profile</p>
        <Select
          defaultValue="Show All"
          style={{ width: 250 }}
          value={selectedProfile}
          onChange={(value) => setSelectedProfile(value)}
        >
          <Option value="Show All">Show All</Option>
          <Option value="Unpublished">Unpublished</Option>
          <Option value="Published">Published</Option>
        </Select>
        </div>
        <div>
        <p>Status</p>
        <Select
          defaultValue="Show All"
          style={{ width: 250 }}
          value={selectedStatus}
          onChange={(value) => setSelectedStatus(value)}
        >
          <Option value="Show All">Show All</Option>
          <Option value="Activated">Activated</Option>
          <Option value="Deactivated">Deactivated</Option>
          <Option value="Newly Created">Newly Created</Option>
        </Select>
        </div>
        <p>Columns</p>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.category}
          onChange={(e) =>
            handleColumnVisibilityChange("category", e.target.checked)
          }
        >
          Category
        </Checkbox>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.users}
          onChange={(e) =>
            handleColumnVisibilityChange("users", e.target.checked)
          }
        >
          Users
        </Checkbox>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.locationName}
          onChange={(e) =>
            handleColumnVisibilityChange("locationName", e.target.checked)
          }
        >
          Location Name
        </Checkbox>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.published}
          onChange={(e) =>
            handleColumnVisibilityChange("published", e.target.checked)
          }
        >
          Published
        </Checkbox>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.createdDate}
          onChange={(e) =>
            handleColumnVisibilityChange("createdDate", e.target.checked)
          }
        >
          Created Date
        </Checkbox>
        <Checkbox
          style={{ width: 300 }}
          checked={columnVisibility.status}
          onChange={(e) =>
            handleColumnVisibilityChange("status", e.target.checked)
          }
        >
          Status
        </Checkbox>
        <Divider />
        <h4 style={{ display: "inline" }}> Save Filter </h4>{" "}
        <InfoCircleOutlined style={{ display: "inline" }} />
        <Input
          placeholder="Eg: Published Branches"
          style={{ display: "inline", width: "80%" }}
          value={filterName}
          onChange={(e) => {
            setFilterName(e.target.value);
            setInputError(false);
          }}
        />
        <button
          style={{ border: "none", scale: "2", background: "none" }}
          onClick={handleSaveFilter}
        >
          <PlusCircleTwoTone style={{ display: "inline", cursor: "pointer" }} />
        </button>
        {inputError && (
          <p style={{ color: "red" }}>Please enter a filter name</p>
        )}
        {filterConditionError && (
          <p style={{ color: "red" }}>Please select filter conditions</p>
        )}
        <div>
          <ul>
            {savedFilters.map((filter, index) => (
              <li
                key={index}
                style={{ cursor: "pointer", listStyleType: "none" }}
                onClick={() => handleSavedFilterClick(filter)}
              >
                {filter.filterName}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default ProtectedPage;
