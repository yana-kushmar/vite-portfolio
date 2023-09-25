import { Document, Page } from 'react-pdf';

import resume from '../../assets/resume/resume.pdf';
import s from './Resume.module.css';

const Resume = () => {
    return (
        <div className={s.wrapper}>
            <Document file={resume}>
                <Page
                    scale={2}
                    pageIndex={0}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            </Document>
        </div>
    );
};

export default Resume;
