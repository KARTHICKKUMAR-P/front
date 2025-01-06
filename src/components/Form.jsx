import React from "react";
import './Form.jsx'; // Ensure the path is correct for your CSS file

function Form() {
    return (
        <div className="slam-book-container">
            <form>
                <fieldset>
                    <legend>SLAM BOOK</legend>
                    
                    {/* Friend's Name */}
                    <div>
                        <label htmlFor="friendName">Friend's Name:</label>
                        <input
                            type="text"
                            id="friendName"
                            name="friendName"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Nickname */}
                    <div>
                        <label htmlFor="nickname">Nickname:</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Enter nickname"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label>Gender:</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                        />
                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                        />
                        <label htmlFor="female">Female</label>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter mobile number"
                        />
                    </div>

                    {/* College Name Dropdown */}
                    <div>
                        <label htmlFor="collegeName">College Name:</label>
                        <select
                            id="collegeName"
                            name="collegeName"
                        >
                            <option value="">Select college</option>
                            <option value="KEC">KEC</option>
                            <option value="KASC">KASC</option>
                            <option value="KPR">KPR</option>
                            <option value="KSR">KSR</option>
                        </select>
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter address"
                        />
                    </div>
                    
                </fieldset>

                {/* Submit Button */}
                <div className="submit-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
