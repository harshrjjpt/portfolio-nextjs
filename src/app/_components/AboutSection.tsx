"use client";
import React, { useState, Suspense, useEffect } from "react";
import styles from "./AboutSection.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import { Title } from "./ui/Title/Title.styled";
import { Parallax } from "react-parallax";
import CSVReader, { IFileInfo } from "react-csv-reader";

function AboutSection() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   const [csvData, setCsvData] = useState<any[] | null>(null);

  //   const handleFileLoaded = async (data: any[], fileInfo: IFileInfo) => {
  //     data = data.slice(4, 8);
  //     const convertedData = await convertData(data);
  //     setCsvData(convertedData); // Only take the first 3 rows
  //     // setCsvData(data);
  //     const haha = await convertData2(convertedData);
  //     console.log(haha);
  //   };

  //   interface InputData {
  //     "# ----------------------------------------": string;
  //     __parsed_extra: (string | number)[];
  //   }

  //   interface OutputData {
  //     [key: string]: string | number;
  //   }

  //   interface InputData2 {
  //     [key: string]: (string | number)[];
  //   }

  //   const convertData = async (input: InputData[]): Promise<OutputData[]> => {
  //     const headers = input[0]["__parsed_extra"];
  //     const output: OutputData[] = [];

  //     for (let i = 1; i < input.length; i++) {
  //       const rowData = input[i]["__parsed_extra"];
  //       const entry: OutputData = {};

  //       for (let j = 0; j < headers.length; j++) {
  //         entry[headers[j] as string] = rowData[j];
  //       }

  //       output.push(entry);
  //     }

  //     return output;
  //   };

  //   const convertData2 = async (input: InputData[]): Promise<DataItem[]> => {
  //     const headers = input[0]["# ----------------------------------------"];
  //     const output: DataItem[] = [];

  //     for (let i = 1; i < input.length; i++) {
  //         const rowData = input[i]["# ----------------------------------------"];
  //         const entry: DataItem = {};

  //         for (let j = 0; j < headers.length; j++) {
  //             entry[headers[j] as string] = rowData[j].toString(); // Ensure it's converted to string
  //         }

  //         output.push(entry);
  //     }

  //     return output;
  // };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.left}>
        <Title className={styles.sectionTitle}>ABOUT ME</Title>
        <p>
          Hey there, Im Harsh, rocking the role of a Frontend Blockchain Engineer at Dapplooker. Im all about diving
          deep into the latest tech trends, constantly leveling up my skills to stay ahead of the curve. Im on the hunt
          for cutting-edge challenges in the IT realm where I can push boundaries and make a real impact. Whether its
          mastering Next.js, React, Angular, Redux, or delving into the intricacies of Web3, Web3.js, Ether.js, Rust,
          Subgraphs, Substreams, and Blockchain technologies, Im all about pushing the boundaries of whats possible in
          the digital realm.
        </p>
      </div>
      <div className={styles.right}>
        <img
          className={styles.aboutPic}
          src="https://static8.depositphotos.com/1003791/928/v/450/depositphotos_9282091-stock-illustration-labyrinth-abstract-seamless-pattern.jpg"
          alt=""
        />
      </div>
    </div>

    // <div>
    //   <h2>CSV File Loader</h2>
    //   <CSVReader
    //     onFileLoaded={handleFileLoaded}
    //     parserOptions={{ header: true, skipEmptyLines: true }}
    //   />
    //   {csvData && (
    //     <div>
    //       <h3>CSV Data:</h3>
    //       <pre>{JSON.stringify(csvData, null, 2)}</pre>
    //     </div>
    //   )}
    // </div>
  );
}

export default AboutSection;
