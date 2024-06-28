import styles from "./KYCReportListItem.module.css";
import {EKYCReportRisk, EKYCReportStatus, IKYCReport} from "../../../models/KYCReport.ts";
import {
  CancelRounded,
  CheckCircle,
  DangerousRounded,
  HelpRounded,
  MoreHoriz,
  ReadMore,
  WarningRounded
} from '@mui/icons-material';
import moment from "moment";

interface IProps {
  report: IKYCReport
}
export default function KYCReportListItem({ report }: IProps) {
  const momentDate = moment(report.dateCreated);

  return (
    <tr className={styles.kycReportListItem}>
      <td className={styles.dates}>
        <p>{ momentDate.format("MMMM D YYYY") }</p>
        <p>{ momentDate.format("HH:mm:ss") }</p>
      </td>

      <td className={styles.name}>
        <p>{ report.name }</p>
        <p>{ report.email }</p>
      </td>

      <td className={styles.type}>
        { report.type }
      </td>

      <ReportRiskValue riskScore={report.riskScore} />
      <ReportStatusValue status={report.status} />

      <td>
        <button>
          <ReadMore />
        </button>
      </td>
    </tr>
  )
}


interface IRiskProps {
  riskScore: EKYCReportRisk | null
}
function ReportRiskValue({ riskScore }: IRiskProps) {
  const icon = (() => {
    if (riskScore == null) return <HelpRounded/>
    if (riskScore === EKYCReportRisk.LOW) return <CheckCircle className={styles.low}/>
    if (riskScore === EKYCReportRisk.MEDIUM) return <WarningRounded className={styles.medium} />
    return <DangerousRounded className={styles.high} />
  })();

  return (
    <td className={styles.risk}>
      <div className={styles.centerContainer}>
        { icon }
        { riskScore || "Not calculated" }
      </div>
    </td>
  )
}


interface IStatusProps {
  status: EKYCReportStatus
}
function ReportStatusValue({ status }: IStatusProps) {
  const statusIcon = (() => {
    if (status === EKYCReportStatus.REJECTED || status === EKYCReportStatus.CANCELLED) return <CancelRounded className={styles.cancelled} />
    if (status === EKYCReportStatus.IN_PROGRESS || status === EKYCReportStatus.READY_FOR_REVIEW) return <MoreHoriz className={styles.more} />
    return <CheckCircle className={styles.approved} />
  })()

  return (
    <td className={styles.status}>
      <div className={styles.centerContainer}>
        { statusIcon }
        { status }
      </div>
    </td>
  )
}