import { detailPage } from "./detailpage";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a class="text-light" href="#" data-toggle="modal" data-target={{detailPage}}>
                    <img className="imgSize" src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
                <detailPage />
            </div>
        </Col>
    )
}


// <div class="modal fade" id="projectModal1" tabindex="-1" role="dialog" aria-labelledby="projectModal1Label" aria-hidden="true">
// <div class="modal-dialog" role="document">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h5 class="modal-title" id="projectModal1Label">test</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="modal-body">
//              {/* Add detailed information here */}
//             <h3 class="experience-title">test</h3>
//             <p class="lead">
//                 test
//                 </p>
//         </div>
//         <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         </div>
//     </div>
// </div>
// </div>

