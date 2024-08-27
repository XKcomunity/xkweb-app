import styles from "./pdf.module.scss";
import pdf from "../../../../public/images/pdf/vue 1.jpg";
import Image from "next/image";


export default function PdfCard() {

  return (
    <>
      <div className={styles.pdfContent}>
         <Image className={styles.pdf_label} src={pdf} alt="" width={250} height={310} />
         <Image className={styles.pdf_label} src={pdf} alt="" width={250} height={310}/>
         <Image className={styles.pdf_label} src={pdf} alt="" width={250} height={310}/>
      </div>
    </>
  )

}