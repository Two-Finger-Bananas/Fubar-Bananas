import { useState, useEffect } from "react";
import FetchComments from "./FetchComments";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_COMMENTS_URL } from "../../api adapters";
import DeleteComment from "./deleteComments";
import editComment from "./editComments";