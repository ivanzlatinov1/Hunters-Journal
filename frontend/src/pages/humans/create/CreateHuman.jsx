import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { CreateHuman } from '@/requests/humans';
import styles from "./CreateHuman.module.css";

function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function onSubmit(data) {
        const dto = { ...data };

        try {
            await CreateHuman(dto);
            navigate("/humans");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.name} id={styles["content-name"]} className={styles.label}>
                        Name:
                        <input
                            id={styles.name}
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                maxLength: { value: 15, message: "Maximum 15 characters" }
                            })}
                            autoComplete="off"
                            placeholder="human's name here"
                        />
                        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                    </label>
                    <label htmlFor={styles.damage} id={styles["content-damage"]} className={styles.label}>
                        Damage:
                        <input
                            id={styles.damage}
                            type="number"
                            {...register("damage",
                                {
                                    required: "Damage is required",
                                    maxLength: { value: 5, message: "Invalid damage" }
                                })}
                            autoComplete="off"
                            placeholder="damage..."
                        />
                        {errors.damage && <span className={styles.error}>{errors.damage.message}</span>}
                    </label>
                    <label htmlFor={styles.hp} id={styles["content-hp"]} className={styles.label}>
                        Health:
                        <input
                            id={styles.hp}
                            type="number"
                            {...register("hp",
                                {
                                    required: "HP is required",
                                    maxLength: { value: 9, message: "Invalid HP" }
                                })}
                            autoComplete="off"
                            placeholder="hp..."
                        />
                        {errors.hp && <span className={styles.error}>{errors.hp.message}</span>}
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <div className={styles["inner-row"]}>
                        <label htmlFor={styles.rarity} id={styles["content-rarity"]}>
                            Rarity:
                            <select id={styles.rarity} {...register("rarity")}>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Epic">Epic</option>
                                <option value="Legendary">Legendary</option>
                            </select>
                        </label>
                        <label className={styles.persuasion}>
                            <span>Gender:</span>
                            <div className={styles.wrap}>
                            <label htmlFor={styles.gender} className={styles["content-gender"]}>
                                Male
                                <input
                                    type="radio"
                                    value={"M"}
                                    {...register("gender",
                                        {
                                            required: "Gender is required",
                                        })}
                                />
                            </label>
                            <label htmlFor={styles.gender} className={styles["content-gender"]}>
                                Female
                                <input
                                    type="radio"
                                    value={"F"}
                                    {...register("gender",
                                        {
                                            required: "Gender is required",
                                        })}
                                />
                            </label>
                            </div>
                        </label>
                        {errors.gender && <span className={styles.error}>{errors.gender.message}</span>}
                    </div>
                    <label htmlFor={styles.image} id={styles["content-image"]} className={styles.label}>
                        Image URL:
                        <input
                            id={styles.image}
                            type="text"
                            {...register("image")}
                            autoComplete="off"
                            className={styles.url}
                            placeholder="(not required)"
                        />
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <label htmlFor={styles.strength} id={styles["content-strength"]} className={styles.label}>
                        Power and Abilities:
                        <textarea
                            id={styles.strength}
                            {...register("strength",
                                {
                                    required: "Strength is required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className={styles.large}
                            placeholder="Type human's strengths..."
                        />
                        {errors.name && <span className={styles.error}>{errors.strength.message}</span>}
                    </label>
                    <div className={styles["submit-effect"]}>
                        <input
                            type="submit"
                            value={"Create"}
                            className={styles.submit}
                        />
                    </div>
                    <label htmlFor={styles.weakness} id={styles["content-weakness"]} className={styles.label}>
                        Weaknesses:
                        <textarea
                            id={styles.weakness}
                            {...register("weakness",
                                {
                                    required: "Weaknesses are required",
                                    maxLength: { value: 100, message: "Description too long" }
                                })}
                            autoComplete="off"
                            className={styles.large}
                            placeholder="Type human's weaknesses..."
                        />
                        {errors.name && <span className={styles.error}>{errors.weakness.message}</span>}
                    </label>
                </div>
            </form>
        </>
    );
}

export default Create;