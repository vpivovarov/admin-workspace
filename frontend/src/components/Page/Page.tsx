import React from "react";
import { createUseStyles } from "react-jss";
import { useQuery } from "react-query";
import axios from "axios";

const fetchAllEndpoints = async () => {
  const origin = window.location.origin;
  const response = await axios.get(`${origin}/api/all_endpoints`);
  return response.data;
};

const Page = () => {
  const styles = useStyles();

  const { data, isLoading, error } = useQuery(
    "allEndpoints",
    fetchAllEndpoints
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <strong>Error</strong>;

  return (
    <main className={styles.root}>
      {data.data.map(({ id, endpoint, description }) => (
        <ul key={id}>
          <li>
            {endpoint} - {description}
          </li>
        </ul>
      ))}
    </main>
  );
};

export default Page;

const useStyles = createUseStyles({
  root: {
    flex: 1,
    padding: 16,
    marginLeft: 360,
    transition: "margin-left 0.3s ease-in-out",
  },
  collapsed: {
    marginLeft: 80,
  },
});
