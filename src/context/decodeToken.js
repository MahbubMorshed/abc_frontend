import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  try {
    if (!token) return null;

    const decoded = jwtDecode(token);

    // Token must include exp & id
    if (!decoded?.exp || !decoded?.id) {
      localStorage.removeItem("abcToken");
      return null;
    }

    // Check expiration
    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("abcToken");
      return null;
    }

    return decoded; // { id, email, name, role, exp, iat }
  } catch (err) {
    // Token corrupted or not decodable
    localStorage.removeItem("abcToken");
    return null;
  }
};

export default decodeToken;
