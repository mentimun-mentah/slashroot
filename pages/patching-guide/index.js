import { Column, Box, Title } from "rbx";
import { motion } from "framer-motion";
import { Fade } from "../../components/Transition";
import Sidebar from "../../components/Sidebar";

const Patching = () => {
  return (
    <Sidebar>
      <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
        <Column>
          <Box>
            <Title size={4} textWeight="bold">
              Rules
            </Title>
            <ol className="patching__guide">
              <li>Don't attack the infrastructure.</li>
              <li>Don't (D)DoS.</li>
              <li>
                All challenges have dynamic score value, including sanity check.
              </li>
            </ol>
          </Box>

          <Box>
            <Title size={4} textWeight="bold">
              Patching Guide
            </Title>
            <ol className="patching__guide">
              <li>
                Only you (or your team) can manage your own services. You cannot
                manage the service owned by other teams.
              </li>
              <li>
                Managing service is done via service page. Service page can be
                found ind{" "}
                <span className="has-text-weight-semibold">
                  /[team_id]/[service_id]
                </span>
                . or by browseing from the navigation in sidebar under Unlocked
                services category.
              </li>
              <li>
                You may need to unlock a service before allowed to manage /
                patch the service. (depends on CTF rules)
              </li>
              <li>
                Patching is done by uploading a patch file using the{" "}
                <span className="has-text-weight-semibold">Upload patch</span>{" "}
                functionality inside service page
              </li>
              <li>
                Patch file is a diff file, containing the difference to be
                patched into the service. Important! files in .gitignore will be
                ignored when applying patch.
              </li>
              <ul className="patching__guide__ul">
                <li>
                  For reference, patch file can be created by using this
                  command:
                </li>
                <pre className="mb-10px">git diff --binary > service.patch</pre>
                <li>
                  Patch will be applied inside service machine with this
                  command:
                </li>
                <pre className="mb-10px">
                  git apply --binary --exclude=[files in .gitignore]
                  [patch_file]
                </pre>
              </ul>
              <li>
                This patcher tool migh have some bugs. Please be mindful when
                using this tool. Please refrain from uploading patch multiple
                times while a patching process is still on going inside the
                service machine, as they migh incur a race condition and break
                the machine.
              </li>
            </ol>
          </Box>

          <style jsx>{`
            :global(.patching__rules) {
              margin-left: 2%;
            }
            :global(.patching__guide) {
              margin-left: 4%;
              margin-top: 1%;
            }
            :global(.patching__guide__ul) {
              list-style-type: circle;
              margin-left: 2%;
            }
            :global(ol > li) {
              padding-bottom: 10px;
            }
            :global(.mb-10px) {
              margin-bottom: 10px !important;
            }
          `}</style>
        </Column>
      </motion.div>
    </Sidebar>
  );
};

export default Patching;
